import { ConfigProvider } from 'antd'

function ThemeProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff4500',
        },
        components: {
          Button: {
            controlHeight: 40,
          },
          Select: {
            controlHeight: 40,
          },
          Input: {
            controlHeight: 40,
          }
        }
      }}    
    >
      { children }
    </ConfigProvider>
  )
}

export default ThemeProvider
