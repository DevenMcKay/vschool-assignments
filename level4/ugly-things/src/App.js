
import './App.css';
import Form from "./components/Form"
import UglyArray from "./components/UglyArray"
import { FormContextProvider } from "./components/formContext"
import { ListContextProvider } from "./components/listContext"

function App() {
  return (
    <>
      {/* <LISTCONTEXT> WIDE COMP WRAP ALLOWS useCONTEXT IN FORMCONTEXT, FORM, & UGLYARRAY */}
      <ListContextProvider>
        <FormContextProvider>
          <Form />
        </FormContextProvider>
        <UglyArray />
      </ListContextProvider>
    </>
  )
}

export default App;
