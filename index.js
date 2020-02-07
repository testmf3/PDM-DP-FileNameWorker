const express = require('express')
const app = express()
const bodyParser = require('body-parser')
 

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./public'))


function outShifr (arr){ //функция вывода значений введенных значений пользователем

	deCipher = ['Шифр проекта',
		'Фаза разработки',
		'Номер объекта',
		'Роль в процессе', 
		'Система/подсистема',
		'Описание',
		'Версия',
		'Код владельца файла',
		'Тип данных',
		'Дата'
		]
		
		for(i = 0; i<arr.length; i++){
			console.log((deCipher[i] +": " +arr[i]))
			 
		}
		return
}


function Shifr (a, b, c, d, e, a1, b1, c1, d1, e1 ){ 			//функция шифрования

	/*if ( e1==false && a1!='x' && b1 !='x' && c1!='x' && d1!='x'){
		console.log(a + '-' +b + '-' + c + '-' + d + '-' + e + '-'+a1 + '-' +b1 + '-' + c1 + '-' + d1)
		
		return
	}*/

	if (a1=='x' && b1 =='x' && c1=='x' && d1=='x' && e1==false){
		return(a + '-' +b + '-' + c + '-' + d + '-' + e )
		
	}

	
	if (e1==false && a1!='x' && b1 =='x' && c1=='x' && d1=='x'){
		return(a + '-' +b + '-' + c + '-' + d + '-' + e + '-'+a1)
		
	}

	if ( e1==false  && b1 !='x' && c1=='x' && d1=='x'){
		return(a + '-' +b + '-' + c + '-' + d + '-' + e + '-'+a1 + '-' +b1 )
		
	}


	if ( e1==false && c1!='x' && d1=='x'){
		return(a + '-' +b + '-' + c + '-' + d + '-' + e + '-'+a1 + '-' +b1 + '-' + c1 )
		
		
	}
	
	if ( e1==false && a1!='x' && b1 !='x' && c1!='x' && d1!=='x'){
		return(a + '-' +b + '-' + c + '-' + d + '-' + e + '-'+a1 + '-' + b1 + '-' + c1)
		
	}

	if ( e1==false && a1!='x' && b1 !='x' && c1=='x' && d1=='x'){
		return(a + '-' +b + '-' + c + '-' + d + '-' + e + '-'+a1 + '-' + b1)
		
	}

	if(e1==false){
		return(a + '-' +b + '-' + c + '-' + d + '-' + e + '-'+a1 + '-' +b1 + '-' + c1 + '-' + d1 )
		
	
	}
	
	return(a + '-' +b + '-' + c + '-' + d + '-' + e + '-'+a1 + '-' +b1 + '-' + c1 + '-' + d1 + '-' + e1)
	

}

function deShifr(kod){ 				//функция проверки введенных данных пользователем
	var arrayOfStrings = kod.split('-')
	if(arrayOfStrings.length<5){
		return("Недостаточно данных")
	}

	PRJ = ["TMK", "TML", "TMZ"]
	STG = ["D01", "D02", "ZOO"]
	R = ["B", "C", "D"]
	SYS = ["L01", "E02", "ZZ"]

	
	for (i=0; i<PRJ.length; i++){
		if (arrayOfStrings[0]===PRJ[i]){
			for( j=0; j<STG.length; j++){
				if(arrayOfStrings[1]===STG[j]){
					for(i1=0; i1<R.length;i1++){
						if(arrayOfStrings[3]===R[i1]){
							for(j1=0; j1<SYS.length; j1++){
								if(arrayOfStrings[4]===SYS[j1])
								return(outShifr(arrayOfStrings))
								
							}
						}
						
					}
				}
				
			}

		}
		
	}
	return("Введите корректные данные")

}


app.post('/getInfo1', function(req, res){
	const kod = req.body.kod
	res.send(deShifr(kod))
	res.end()

})

app.post('/getInfo', function (req, res){


	const cipher = req.body.cipher
	const stg = req.body.stg
	const numberOfObj = req.body.numberOfObj
	const role = req.body.role
	const sys = req.body.sys
	const dsc = req.body.dsc
	const ver = req.body.ver
	const sth = req.body.sth
	const dt = req.body.dt
	const dat = req.body.dat

	res.send(Shifr(cipher, stg, numberOfObj, role, sys, dsc, ver, sth, dt, dat))
	res.end()
	
})


app.get('/', (req, res) =>{
	//console.log("Responding to root route")
	res.send("Hello")
})



app.listen(3003, () => {
	console.log("Server is up")
})


