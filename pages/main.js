import Link from 'next/link';
import Router from 'next/router' ;

export default () => (
    <div>
        <p>pokmang 123</p>
        <button onClick={()=> {Router.push('/') }}>go home</button>

    </div>
);
