function fail(){
    try {
        console.log('It works')
        throw new Error('Oopsde')
    }catch(err){
        console.log('An Error has occured', err.message)//err.name, err.stack
    }
}

fail()


Promise.resolve('Task Faild')
    .then(res => 
        {
            throw new Error('#1 First Then ')
            return res
        }
    )
    .catch(err => {
        return err
    })
    .then(res => {
        console.log(res.name)
    } )