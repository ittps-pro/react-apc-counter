import React, { useState } from 'react'
import { ProCard, ProForm, ProFormList, ProFormText } from '@ant-design/pro-components'

function CardData(stateValue: any[]) {
  const [values, setValues] = useState(stateValue)

  return (<ProCard bordered split="vertical" headerBordered>
      <ProCard colSpan="calc(100% - 400px)">
        <ProForm>
          <ProFormList
            name="users"
            label="Users"
            initialValue={[
              {
                name: '1111',
              },
            ]}
            creatorButtonProps={{
              position: 'bottom',
            }}
            //  {...stateValue}
          >
            <ProForm.Group key="group" size={8}>
              <ProFormText name="name" label="name" />
              <ProFormText name="nickName" label="nickName" />
            </ProForm.Group>
          </ProFormList>
        </ProForm>
      </ProCard>)
}

export default CardData

