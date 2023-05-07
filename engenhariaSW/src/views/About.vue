<template>
    <div class="about">
        <h1>About</h1>
        <router-link to="/">Go to Home</router-link>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import {
ref as firebaseRef,
set as firebaseSet,
get as firebaseGet,
onDisconnect,
onValue,
update,
onChildRemoved,
query,
child,
get,
} from 'firebase/database';
import { db } from '../main.js';

function setarHost(){
    const host = firebaseRef(db, `host/chave/`);
    firebaseSet(host, 'playerId');
}
async function getHost() {
    const host = firebaseRef(db, `host/chave/`);
    //let res = (await firebaseGet(host)).val()
    //console.log(res)
    let res = await firebaseGet(host)
    console.log(res.val())
}

export default {
    name: 'About',
    components: {},
    methods: {
        

    },
    setup() {
        //setarHost()
        getHost()
    },
    data() {},
    beforeMount() {}
}
</script>