
import Modal from 'react-bootstrap/Modal';
import LoginForm from '../LoginForm';

const LoginModal = ({show, handleClose}) => {
    const onFormSubmit =(data)=>{
        console.log('onformSubmit called')
        console.log(data)
        handleClose()
    }
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <LoginForm onFormSubmit={onFormSubmit}/>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button type='submit' variant="primary" {...register('submit')} >
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginModal