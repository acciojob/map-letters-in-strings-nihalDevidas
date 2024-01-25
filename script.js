//your JS code here. If required.

const mpLetters = (str)=>{

	let mp = new Map()

	for(let i=0; i<str.length; i++){
		let ch = str.charAt(i)
		if(mp.has(ch)){
			let arr = mp.get(ch);
			 arr.push(i)
			mp.set(ch,[...arr])
		}
		else{
			mp.set(ch,[i])
		}
	}
	return mp;
}

