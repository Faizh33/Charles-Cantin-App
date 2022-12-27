import Title from '../Components/Title';
import Form from '../Components/Form';


const Contact = () => {
  return (
    <div className="Contact">
        <Title text="Contactez-moi" />
        <Form />
        <style jsx> {`
        .Contact {
          background: #EFF7FA;
        }
      `}</style>
    </div>
  )
}

export default Contact