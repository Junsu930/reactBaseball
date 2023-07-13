import React, {Component} from 'react';

// 숫자 4개를 겹치지 않고 뽑기
function getNumbers(){

}

class Baseball extends Component {
    state = {
        result : '',
        value : '',
        answer : getNumbers(),
        tries : {}
    };

    onSubmitForm = e=>{
        
    };

    onChangeInput = () =>{

    };
    input;

    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {[
                        {fruit:'사과',characteristic:'달다'},
                        {fruit:'딸기',characteristic:'상큼하다'},
                        {fruit:'배',characteristic:'아삭하다'},
                        {fruit:'복숭아',characteristic:'달콤새콤'},
                        {fruit:'포도',characteristic:'재밌다'},
                    ].map((v)=>{
                        return (
                            <li key={v.fruit + v.characteristic}><b>{v.fruit}</b> - {v.characteristic}</li>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default Baseball;