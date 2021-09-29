<script>
//import he from "he";

export default {
    name: 'EmailMixin',
    computed: {
        email() {
            /*
            return he.encode('adam@nastojte.cz', {
            'encodeEverything': true
            });
            */
           return 'obfuscated@dev.null';
        }
    },
    methods: {
        decode(evt) {
            //console.debug('arg1', evt);
            //console.debug('arg2', arg2);
            evt.srcElement.href = 'adam@nastojte.cz';
            return true;
        }
    }
    
}
</script>