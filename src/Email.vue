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
           return '&#x61;&#x64;&#x61;&#x6D;&#x40;&#x6E;&#x61;&#x73;&#x74;&#x6F;&#x6A;&#x74;&#x65;&#x2E;&#x63;&#x7A;';
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