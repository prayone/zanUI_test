var Zan = require('../../zanui/index');

Page({

  data: {
    items: [
      {
        padding: 0,
        value: '1',
        name: '选项一',
      },
      {
        padding: 0,
        value: '2',
        name: '选项二',
      },
      {
        padding: 0,
        value: '3',
        name: '选项三',
      },
    ],

    checked: {
      base: -1,
      color: -1,
      form: -1
    },

    activeColor: '#4b0'
  },

  handleZanSelectChange({ componentId, value }) {
    this.setData({
      [`checked.${componentId}`]: value
    });
  },

  formSubmit(event) {
    console.log('[zan:field:submit]', event.detail.value);
    this.showZanTopTips(`选中的值为${event.detail.value.formtest}`);
  }
});