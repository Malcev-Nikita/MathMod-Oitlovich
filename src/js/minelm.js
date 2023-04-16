function minelm(v, dispnum, not_last){ 
    var m= v[0];
	var num= 0;
	var len=0;

	// если not_last, то последний элемент не учитываем в массиве
	if (not_last){
		len = v.length-2;
	}else{
		len = v.length-1;
	}
    for (var i=1; i <= len; i++){ 
		if (v[i] < m ){
			m= v[i];
			num = i
		}
    }
	// Выводим номер минимального
	if (dispnum){
		return num
	}else{ // или значение
		return m
	}
}

module.exports = minelm