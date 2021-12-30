import { useState } from 'react'
import './App.less'

import Mask from './Mask'

function App() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setVisible(true)}>显示弹窗</button>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <div>滚动元素内容</div>
      <Mask
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
      >
        <div className="panel">
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
          <div>滚动元素内容</div>
        </div>
      </Mask>
    </div>
  )
}

export default App
