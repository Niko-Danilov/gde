import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import { HomePage } from './pages/HomePage.tsx'
import { StatusPage } from './pages/StatusPage.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},

	{
		path: 'pay/check',
		element: <StatusPage />,
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
