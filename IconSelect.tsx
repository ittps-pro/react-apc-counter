

async function requestIcons(IconMap: any[]) {

    
        return Object.keys(IconMap).map((value) => {
          const Icon = IconMap[value as 'PlusOutlined'];
          return {
            label: <Icon />,
            value,
          };
        });
      }
// <ProForm.Group size={8}>
// <ProFormText
//   width="sm"
//   name={['deleteIconProps', 'tooltipText']}
//   label=" tooltip 提示文字"
// />
// <ProFormSelect
//   width="xs"
//   name={['deleteIconProps', 'Icon']}
//   label="Icon"
//   request={}
// />
// </ProForm.Group>