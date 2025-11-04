import { useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
      <div id="error-page" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
        <h1 className="text-6xl font-bold text-purple-600 dark:text-purple-400 mb-4">Oops!</h1>
        <p className="text-xl text-gray-800 dark:text-gray-200 mb-2">Sorry, an unexpected error has occurred.</p>
        <p className="text-md text-gray-500 dark:text-gray-400 mb-8">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
          Go Back to Home
        </Link>
      </div>
  );
}
