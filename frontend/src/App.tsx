// import './App.css'
import { Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'
import { Button, Layout, Calendar, Input, Table, Tag, Card, Form } from 'antd'
import { ProCard } from '@ant-design/pro-components'

// Works also with SSR as expected
// const CardData = lazy(() => import('./CardData'))

const HeaderS = () => (<div>
  <a href="https://vite.dev" target="_blank">
    <img src="/vite.svg" className="logo" alt="Vite logo" />
  </a>
  <a href="https://reactjs.org" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>



  <Button>Hide</Button>
</div>)


function App() {
  return (<>
    <Card actions={[
      <Button type='primary'>Create</Button>
    ]} 


    title={"Новая запись"} extra={[<Tag color={"pink"} >Участник</Tag>]}>
      <Form layout='vertical' id={"customer"} >
        <Form.Item key={"lastname"} name={"lastname"} label={"Фамилия"}>
          <Input name='lastname' />
        </Form.Item>
        <Form.Item key={"firtname"} label={"Имя"} labelAlign='left' >

          <Input name='name.firtname' />

        </Form.Item>
        <Form.Item name={"middlename"} label={"Отчество"}>
          <Input name='name.middlename' value={"middlename"} />
        </Form.Item>
      </Form>

      <p className="read-the-docs">
        Status
      </p>

    </Card>

    <Suspense fallback={<p>Loading card component...</p>}>
      <ProCard title={
        "da"
      } />
    </Suspense>

    <Card>
      Белы Куна 19-1-169
      <div>i</div>
      <Select />
    </Card>
    <Card>2</Card>
    <Card>3</Card>

  </>
  )
}

export default App
