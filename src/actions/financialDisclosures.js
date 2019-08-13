export function getMemberFinances(id){
  return (dispatch) => {
      dispatch ({type: 'LOADING'})
      const url = "http://localhost:3000/search/financial_disclosures/member/"+id
      fetch(url).then((response) => {
        if (response.ok) {
          console.log(response.json())
          return response.json();
        } else {
          console.log('error')
          throw new Error('Something went wrong');
        }
      })
      .catch(function (err) {console.log(err)})
      .then(financialDisclosures =>dispatch({type:"GET_MEMBER_FINANCES", financialDisclosures})
      )
    }
  }
