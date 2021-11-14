<script>
import { state } from './notifications';

export default {
    // props: {
    //     group: {
    //         type: String,
    //         default: '',
    //     },
    //     position: {
    //         type: String,
    //         default: 'top',
    //         validator(value) {
    //             return ['top', 'bottom'].includes(value);
    //         },
    //     },
    // },
    data() {
        return {
            data: state.alertGroupData,
        };
    },
    // provide() {
    //     return {
    //         context: { group: this.data.group, position: this.data.position },
    //     };
    // },
    render() {
        return this.$scopedSlots.default({
            group: this.data.group,
        });
    },
};
</script>
