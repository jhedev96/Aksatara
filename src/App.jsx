import { useState, useEffect, useMemo } from 'react';
import { ArrowLeftRight, Menu, Copy, Info, Book, Settings, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
    translaterMap,
    schemerMap,
    transliterateRoman,
    transliterateToBugis,
    languages,
    availableAknus,
    cekAknus,
    cekAknusTag,
    cekAksara,
    cekAksaraTag
} from '@/hooks/transliterator';

function App() {
    const [fromLang, setFromLang] = useState('lt');
    const [toLang, setToLang] = useState('sd');
    const [fromText, setFromText] = useState('');
    const [toText, setToText] = useState('');
    const [useSpaces, setUseSpaces] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('vite-ui-theme') === 'dark' ||
                (!('vite-ui-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(isDarkMode ? "dark" : "light");
        localStorage.setItem('vite-ui-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    // Transliterasi
    useEffect(() => {
        if (!fromText) {
            setToText('');
            return;
        }
        let result;
        let trKey = `${fromLang}_${toLang}`;
        if (fromLang === 'dt') trKey = null;
        if (trKey != null) {
            if (trKey.startsWith('lt')) {
                if (fromText.match(/([a-zA-Z0-9])/g)) {
                    result = transliterateRoman(translaterMap[trKey], fromText, schemerMap[trKey], { useSpaces });
                } else {
                    if (availableAknus(fromText) === true) {
                        setFromText(cekAknus(fromText));
                        result = '';
                    } else {
                        setFromText('');
                        result = '';
                    }
                }
            } else {
                if (cekAknus(fromText) === true) {
                    if (cekAknusTag(fromText, trKey) === true) {
                        result = cekAksaraTag(fromText, trKey);
                    } else {
                        result = `Aksara yang Anda masukkan bukan ${languages[fromLang]}`;
                    }
                } else {
                    result = cekAksara(fromText);
                }
            }
        } else {
            result = cekAksara(fromText);
        }
        // if (fromLang != 'lt' && !translaterMap[trKey]) {
        //     result = 'Transliterasi dari aksara ini belum didukung.';
        // }

        setToText(result);
    }, [fromText, fromLang, toLang, useSpaces]);

    const handleSwap = () => {
        // if (fromLang !== 'lt') {
        //     toast({
        //         variant: "destructive",
        //         title: "Gagal menukar!",
        //         description: "Untuk saat ini penukaran hanya bisa dari Latin.",
        //     });
        //     return;
        // };
        const tempFromText = fromText;
        const tempToText = toText;
        const tempFromLang = fromLang;
        const tempToLang = toLang;

        setFromLang(tempToLang);
        setToLang(tempFromLang);
        setFromText(tempToText);
        setToText(tempFromText);
    };

    const handleCopy = (text, lang) => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        toast.info(`Teks ${languages[lang]} berhasil disalin ke clipboard.`);
    };

    const getFontClass = (lang) => {
        const fontMap = {
            sd: 'font-sunda', jw: 'font-jawa', bl: 'font-bali',
            bt: 'font-batak', rj: 'font-rejang', bg: 'font-bugis', mk: 'font-makassar',
            kw: 'font-kawi', pg: 'font-pegon'
        };
        return fontMap[lang] || '';
    };

    const fromOptions = useMemo(() => Object.entries(languages)
        //.filter(([code]) => code === 'lt')
        .map(([code, name]) => <SelectItem key={code} value={code}>{name}</SelectItem>), []);

    const toOptions = useMemo(() => Object.entries(languages)
        //.filter(([code]) => code !== 'dt')
        .map(([code, name]) => <SelectItem key={code} value={code}>{name}</SelectItem>), []);

    return (
        <div className="min-h-screen bg-green-100 dark:bg-gray-950/90 text-gray-800 dark:text-gray-200 font-sans">
            <header className="bg-red-400 dark:bg-red-950/90 text-primary-foreground p-3 flex items-center justify-between shadow-md sticky top-0 z-10">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="default" size="icon" className="bg-white rounded-lg">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="flex justify-center left-5 right-5 rounded-t-xl dark:bg-amber-800/25">
                        <SheetHeader>
                            <SheetTitle>Pengaturan</SheetTitle>
                        </SheetHeader>
                        <div className="py-4 space-y-4">
                            <div className="flex items-center justify-between mx-6 border p-3 rounded-md">
                                <Label htmlFor="dark-mode-switch" className="flex items-center gap-2">
                                    <Moon className="h-5 w-5" />
                                    <span>Mode Gelap</span>
                                </Label>
                                <Switch id="dark-mode-switch" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
                <Link to="/" target="_top"><img src="/img/logo.png" className="w-40" /></Link>
                <div className="w-10"></div>
            </header>

            <main className="p-2 md:p-4 max-w-screen mx-auto z-10">
                <Card className="shadow-lg bg-amber-100 dark:bg-amber-950/25 rounded-xl">
                    <CardContent className="p-4">
                        <Tabs defaultValue="toolkit">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="toolkit"><Book className="h-4 w-4 mr-2" />Transliterasi</TabsTrigger>
                                <TabsTrigger value="info"><Info className="h-4 w-4 mr-2" />Tentang</TabsTrigger>
                            </TabsList>
                            <TabsContent value="toolkit" className="mt-4">
                                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-4">
                                    <div className="flex items-center w-full bg-background border rounded-md">
                                    <div className="w-full md:w-auto flex-1">
                                        <Select value={fromLang} onValueChange={setFromLang}>
                                            <SelectTrigger id="from-lang" className="bg-background border-background h-15">
                                                <SelectValue placeholder="Pilih dari.." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Pilih dari:</SelectLabel>
                                                    {fromOptions}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <Button variant="noShadow" size="icon" className="w-20 h-10 mt-2 mb-2 md:mt-3 md:mb-3 bg-amber-100 dark:bg-amber-950/25 rounded-full dark:border-foreground" onClick={handleSwap}>
                                        <ArrowLeftRight className="h-5 w-5 text-foreground" />
                                    </Button>
                                    <div className="w-full md:w-auto flex-1">
                                        <Select value={toLang} onValueChange={setToLang}>
                                            <SelectTrigger id="to-lang" className="bg-background border-background h-15">
                                                <SelectValue placeholder="Pilih ke.." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Pilih ke:</SelectLabel>
                                                    {toOptions}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <Label htmlFor="from-text">Masukkan Teks</Label>
                                        <Textarea
                                            id="from-text"
                                            value={fromText}
                                            onChange={(e) => setFromText(e.target.value)}
                                            placeholder="Ketik disini..."
                                            className="h-64 md:h-96 lg:h-164 resize-none"
                                            spellCheck="false"
                                        />
                                        <Button variant="ghost" size="icon" className="absolute top-7 right-1" onClick={() => handleCopy(fromText, fromLang)}>
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="relative">
                                        <Label htmlFor="to-text">Hasil Konversi</Label>
                                        <Textarea
                                            id="to-text"
                                            value={toText}
                                            readOnly
                                            disabled
                                            placeholder="Hasil akan muncul disini..."
                                            className={`h-64 md:h-96 lg:h-164 resize-none text-2xl leading-relaxed disabled:opacity-100 disabled:cursor-copy ${getFontClass(toLang)}`}
                                        />
                                        <Button variant="ghost" size="icon" className="absolute top-7 right-1" onClick={() => handleCopy(toText, toLang)}>
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2 p-4 border rounded-md mt-6">
                                    <Switch id="space-switch" checked={useSpaces} onCheckedChange={setUseSpaces} />
                                    <Label htmlFor="space-switch">Gunakan Spasi</Label>
                                </div>
                            </TabsContent>
                            <TabsContent value="info" className="mt-4 prose dark:prose-invert max-w-none">
                                <blockquote className="bg-secondary-background p-4 rounded-md">
                                    <p>Aksatara adalah versi aplikasi dari <Link to="https://github.com/jhedev96/AksaraNusantara.js" target="_blank">AksaraNusantara.js</Link> yang didasarkan pada proyek saya yang lain, <Link to="https://github.com/jhedev96/SundaneseScript.js" target="_blank">SundaneseScript.js</Link>, yang merupakan pustaka transliterator untuk aksara Sunda. Setelah meneliti aksara Nusantara lainnya, saya memutuskan untuk membuat transliterasi untuk aksara aksara nusantara lainnya seperti Sunda, Jawa, Bali, Batak, Rejang, Bugis dan lainnya.</p>
                                    <footer className="mt-3 text-sm text-gray-950/80 dark:text-white/80"><cite>Aksatara</cite> juga cepat. Hanya butuh sekitar 2 milidetik untuk mengubah kalimat sederhana.</footer>
                                </blockquote>
                                <div className="text-center mt-8 text-sm text-gray-500">
                                    <p>Copyright © <Link to="https://github.com/jhedev96" target="_blank">JheDevX</Link> {new Date().getFullYear()}</p>
                                    <small>All Rights Reserved.</small>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </main>
            <Toaster />
        </div>
    );
}

export default App;
