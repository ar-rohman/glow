<script>
import defaults from './defaults';
import { state, methods } from './util';

export default {
    inject: {
        context: { default: { group: defaults.group, position: defaults.position } },
    },
    props: {
        maxAlerts: {
            type: Number,
            default: defaults.maxAlerts,
        },
        transitionGroupClasses: {
            default: () => ({
                enterActiveClassDelayed: defaults.enterActiveClassDelayed,
                enterActiveClass: defaults.enterActiveClass,
                enterClass: defaults.enterClass,
                enterToClass: defaults.enterToClass,
                leaveActiveClass: defaults.leaveActiveClass,
                leaveClass: defaults.leaveClass,
                leaveToClass: defaults.leaveToClass,
                moveClass: defaults.moveClass,
            }),
        },
    },
    render(createElement) {
        return createElement(
            'transition-group',
            {
                attrs: {
                    'enter-active-class': this.alertsByGroup.length > 1
                        ? this.transitionGroupClasses.enterActiveClassDelayed
                        : this.transitionGroupClasses.enterActiveClass,
                    'enter-class': this.transitionGroupClasses.enterClass,
                    'enter-to-class': this.transitionGroupClasses.enterToClass,
                    'leave-active-class': this.transitionGroupClasses.leaveActiveClass,
                    'leave-class': this.transitionGroupClasses.leaveClass,
                    'leave-to-class': this.transitionGroupClasses.leaveToClass,
                    'move-class': this.transitionGroupClasses.moveClass,
                },
            },
            [
                Object.prototype.hasOwnProperty.call(this.$scopedSlots, 'default')
                    ? this.$scopedSlots.default(
                        { alerts: this.sortedAlerts, close: this.close },
                    )
                    : null,
            ],
        );
    },
    data() {
        return {
            alerts: state.alertData,
        };
    },
    computed: {
        sortedAlerts() {
            if (this.context.position === 'bottom') { return [...this.alertsByGroup].slice(0, this.maxAlerts); }
            // if not bottom reverse the array
            return [...this.alertsByGroup]
                .reverse()
                .slice(0, this.maxAlerts);
        },
        alertsByGroup() {
            return this.alerts.filter((n) => n.group === this.context.group);
        },
    },
    methods: {
        close(id) {
            this.$emit('close');
            methods.removeAlert(id);
        },
    },
};
</script>
