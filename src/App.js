import Input from './components/Input';
import Button from './components/Button';
import {Container, Content, Row} from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNuber, setCurrentNuber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('0');

  const handleOnClear = () =>{
    setCurrentNuber('0')
    setFirstNumber('0')
    setOperation('0')
  };

  const handleAddNuber =(number) => {
    setCurrentNuber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNubers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNuber));
      setCurrentNuber('0');
      setOperation('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNuber);
      setCurrentNuber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNubers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNuber));
      setCurrentNuber('0');
      setOperation('-');
    }else{
      const sum = Number(firstNumber) - Number(currentNuber);
      setCurrentNuber(String(sum));
      setOperation('');
    }
  }

  const handleMultNubers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNuber));
      setCurrentNuber('0');
      setOperation('*');
    }else{
      const sum = Number(firstNumber) * Number(currentNuber);
      setCurrentNuber(String(sum));
      setOperation('');
    }
  }

  const handleDivideNubers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNuber));
      setCurrentNuber('0');
      setOperation('/');
    }else{
      const sum = Number(firstNumber) / Number(currentNuber);
      setCurrentNuber(String(sum));
      setOperation('');
    }
  }

  const handleEquals = () =>{
    if(!firstNumber !== '0' && operation !== '' && currentNuber !== '0'){
      switch(operation){
        case '+':
          handleSumNubers();
          break;
        case '-':
          handleMinusNubers();
          break;
        case '*':
          handleMultNubers();
          break;
        case '/':
          handleDivideNubers();
          break;
      default: break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNuber}/>
        <Row>
            <Button label="0" onClick={()=>handleAddNuber('0')}/>
            <Button label="/" onClick={handleDivideNubers}/>
            <Button label="C" onClick={handleOnClear}/>
            <Button label="*" onClick={handleMultNubers}/>
          </Row>
        <Row>
            <Button label="7" onClick={()=>handleAddNuber('7')}/>
            <Button label="8" onClick={()=>handleAddNuber('8')}/>
            <Button label="9" onClick={()=>handleAddNuber('9')}/>
            <Button label="-" onClick={handleMinusNubers}/>
          </Row>
        <Row>
            <Button label="4" onClick={()=>handleAddNuber('4')}/>
            <Button label="5" onClick={()=>handleAddNuber('5')}/>
            <Button label="6" onClick={()=>handleAddNuber('6')}/>
            <Button label="+" onClick={handleSumNubers}/>
          </Row>
          <Row>
            <Button label="1" onClick={()=>handleAddNuber('1')}/>
            <Button label="2" onClick={()=>handleAddNuber('2')}/>
            <Button label="3" onClick={()=>handleAddNuber('3')}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
