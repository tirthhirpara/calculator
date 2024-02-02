import './App.css';
import { useState } from 'react';

function App() {

	let [sign, setsign] = useState("");
	let [temp, settemp] = useState("");
	let [fval, fsetval] = useState("");

	let Ans = (a) => {
		settemp(temp + a);
	}

	let fdata = (s) => {
		setsign(s);
		fsetval(temp)
		settemp('')
	}

	let ldata = () => {

		if (sign == '+') {
			settemp(`${parseInt(fval) + parseInt(temp)}`);
		}
		if (sign == '-') {
			settemp(`${parseInt(fval) - parseInt(temp)}`);
		}
		if (sign == '*') {
			settemp(`${parseInt(fval) * parseInt(temp)}`);
		}
		if (sign == '/') {

			if (temp == 0) {
				settemp("cat't divide by zero");
			}
			else {
				settemp(`${parseInt(fval) / parseInt(temp)}`);

			}
		}
		if (sign == "%") {
			settemp(`${parseInt(fval) % parseInt(temp)}`);
		}
	}

	const clr = (s) => {
		if (s == 'c') {
			settemp("");
		}
		else {
			settemp(temp.slice(0, -1));
		}
	}

	return (
		<>
			<div className="cal">
				<input type="text" value={temp} className='text-box' id="ans2"></input><tr></tr>
				<input type="button" name="" className='btn' id="C" value="C" onClick={() => clr("c")}></input>
				<input type="button" name="" className='btn' id="Del" value="Del" onClick={e => settemp(temp.slice(0, -1))}></input>
				<input type="button" name="" className='btn' id="%" value="%" onClick={() => fdata('%')}></input>
				<input type="button" name="" className='btn' id="/" value="/" onClick={() => fdata("/")}></input><tr></tr>
				<input type="button" name="" id="7" value="7" className='btn' onClick={() => Ans(7)}></input>
				<input type="button" name="" id="8" value="8" className='btn' onClick={() => Ans(8)}></input>
				<input type="button" name="" id="9" value="9" className='btn' onClick={() => Ans(9)}></input>
				<input type="button" name="" id="X" value="X" className='btn' onClick={() => fdata('*')}></input><tr></tr>
				<input type="button" name="" id="4" className='btn' value="4" onClick={() => Ans(4)}></input>
				<input type="button" name="" id="5" className='btn' value="5" onClick={() => Ans(5)}></input>
				<input type="button" name="" id="6" className='btn' value="6" onClick={() => Ans(6)}></input>
				<input type="button" name="" id="-" className='btn' value="-" onClick={() => fdata('-')}></input><tr></tr>
				<input type="button" name="" id="1" value="1" className='btn' onClick={() => Ans(1)}></input>
				<input type="button" name="" id="2" value="2" className='btn' onClick={() => Ans(2)}></input>
				<input type="button" name="" id="3" value="3" className='btn' onClick={() => Ans(3)}></input>
				<input type="button" name="" id="+" value="+" className='btn' onClick={() => fdata('+')}></input><tr></tr>
				<input type="button" name="" id="0" value="0" className='btn' onClick={() => Ans(0)}></input>
				<input type="button" name="" id="00" value="00" className='btn' onClick={() => Ans('00')}></input>
				<input type="button" name="" id="." value="." className='btn' onClick={() => Ans('.')}></input>
				<input type="button" name="" id="=" value="=" className='btn' onClick={() => ldata()}></input>
			</div>
		</>
	);
}

export default App;
