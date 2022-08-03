
function solution(A) {
  
  const posInts = 
  A.filter(number => {
    if (number>=1) {
      return number
    }
  }
  
  );
   const sortedArray = posInts.sort((a, b) =>a-b)

  const keysArray = Object.keys(sortedArray)
  
  // console.log(sortedArray)
  // console.log(keysArray)

 const compare = (sortedArray,keysArray) => {
    const finalArray=[];
    keysArray.forEach((e1)=>sortedArray.forEach((e2)=>
    {if(e1==e2){
    finalArray.push(e1)
    }}))
  return parseInt(finalArray) + 1
  }



  return compare(sortedArray,keysArray)
}

console.log(
solution([0,-100, 1, 0, 100, 101, 66, 22])
)
       <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}



<style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}
                </style>
