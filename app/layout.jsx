import '@styles/global.css'

export const metadata = {
    title: 'Promptex',
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient'/>
                    <main className='app'>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}

export default RootLayout