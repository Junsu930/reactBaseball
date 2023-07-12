const React = require('react');
const {Component} = React;

// 숫자 4개를 겹치지 않고 뽑기

class Baseball extends Component {
    state = {
        result : '',
        value : '',
        answer : '',
        tries : {}
    };

    onSubmitForm = ()=>{
        
    };

    onChangeInput = () =>{

    };
    
    render(){
        retrun(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                {['like','like','like','like','like'].map((v)=>{
                    return (
                        <li>{v}</li>
                    );
                })}
            </ul>
            </>
        );
    }
}

module.exports = Baseball;