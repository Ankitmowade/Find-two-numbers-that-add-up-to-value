function findSum(arr, value) {
  
    for( i=0;i<=arr.length;i++){
      
			for( j=0;j<=arr.length;j++){
        
				if(arr[i]+arr[j]==value){
          
				return [i,j];
      }
      
      
    }
    
  }
  return false;

}

console.log(findSum([1, 21, 3, 14, 5, 60, 7, 6], 7));
