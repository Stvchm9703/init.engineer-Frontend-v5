// import "../../resources/sass/_global.scss";
// import "../../resources/sass/frontend/app.scss";
import Create from '../../resources/js/frontend/components/social/cards/SocialCardsCreate.vue';
export default {
  title: 'From-the-past/StoryCard/Card',
  component: Create,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { create:Create },
  template: `
  <create 
    :isAdmin="isAdmin"
    />`,
});

export const Default = Template.bind({});
Default.args = {
  isAdmin: {},
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
