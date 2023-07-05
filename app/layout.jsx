// import '@styles/global.css'
export const metadata={
    title:"findmeoffice",
    description:"Discover and own new offices..."
}
const layout = ({children}) => {
  return (
    <html lang="en">
    <body>
    <div className="main">
        <div className='gradient'/>
    </div>
    <main className='app'>
        {children}
    </main>
    </body>
    </html>
  )
}

export default layout