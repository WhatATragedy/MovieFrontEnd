export const sortData=(data)=>{
    const sortedData=[...data];
    sortedData.sort((a,b)=>{
        if(a.audience_rating>b.audience_rating){
            return -1;
        }else{
            return 1;
        }
        }
    )
    return sortedData

}