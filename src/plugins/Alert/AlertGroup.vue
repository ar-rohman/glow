<script>
export default {
    props: ['group', 'position'],
    provide() {
        return {
            context: { group: this.group, position: this.position },
        };
    },
    render() {
        return this.$scopedSlots.default({
            group: this.group,
        });
    },
};
</script>
