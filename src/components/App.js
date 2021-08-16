import './App.css';
import Button from './Button';
function App() {
  return (
    <div className="w-10/12 sm:w-7/12 lg:w-6/12 mx-auto">
      <div>
        <input className="w-full border-2 rounded-lg text-3xl my-2 mt-10 border-purple-300 h-20" placeholder="enter"></input>
      </div>
      <div className="grid gap-2 mx-auto grid-cols-4">
        <Button value="9" color="red" />
        <Button value="8" color="red"/>
        <Button value="7" color="red"/>
        <Button value="/" color="yellow"/>
        <Button value="6" color="red"/>
        <Button value="5" color="red"/>
        <Button value="4" color="red"/>
        <Button value="-" color="yellow"/>
        <Button value="3" color="red"/>
        <Button value="2" color="red"/>
        <Button value="1" color="red"/>
        <Button value="*" color="yellow"/>
      </div>
      <div className="grid gap-2 mx-auto my-2 grid-cols-2">
        <Button value="+" color="yellow"/>
        <Button value="=" color="purple"/>
      </div>
    </div>
  );
}

export default App;
