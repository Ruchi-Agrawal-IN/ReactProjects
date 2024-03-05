
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
const LoginForm = ({onFormSubmit}) => {
    const {register, handleSubmit} = useForm();
  return (
    <Form onSubmit={handleSubmit(data => onFormSubmit(data))} >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        {...register('email')}
        type="email"
        placeholder="name@example.com"
        autoFocus
      />
    </Form.Group>
    <Form.Group
      className="mb-3"
      controlId="exampleForm.ControlTextarea1"
    >
      <Form.Label>Example textarea</Form.Label>
      <Form.Control{...register("description")} as="textarea" rows={3} />
    </Form.Group>
    <Button type='submit' variant="primary"  >
    Save Changes
  </Button>
  </Form>
  )
}

export default LoginForm