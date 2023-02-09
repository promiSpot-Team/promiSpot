import React, {useRef, useState} from 'react'
import { Button, Modal } from 'antd';
import Draggable from 'react-draggable'
import DragDrop from '../../components/DragDrop/DragDrop';
import '../scss/Test4.scss'

export default function Test4() {
  const draggleRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const showModal = () => { setVisible(true); };
  // const handleModalOk = (e: React.MouseEvent<HTMLElement>) => { setVisible(false); };
  // const handleModalCancel = (e: React.MouseEvent<HTMLElement>) => { setVisible(false); };
  return (
    
    <>
      <Button onClick={showModal}>Modal 열기</Button>
      <Modal
        title='Draggable Modal'
        visible={visible}
        // onOk={handleModalOk}
        // onCancel={handleModalCancel}
        modalRender={modal => (
          <Draggable handle='.ant-modal-title'>
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <p>이제 모달을 드래그할 수 있습니다</p>
      </Modal>
    </>
  )
}
