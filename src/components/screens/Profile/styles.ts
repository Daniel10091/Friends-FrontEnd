import { StyleSheet } from 'react-native';
import { Theme } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.RaisinBlack,
  },

  // Header styles
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  headerButtonIcon: {
    fontSize: 24,
    color: Theme.Colors.White,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  contactStatus: {
    width: 10,
    height: 10,
    marginRight: 6,
    marginBottom: 4,
    borderRadius: 10,
  },
  contactOnlineStatus: {
    backgroundColor: Theme.Colors.Melachite,
  },
  contactOfflineStatus: {
    backgroundColor: Theme.Colors.CadetBlueCrayola,
  },
  contactUsername: {
    fontSize: 20,
    color: Theme.Colors.White,
  },

  // Body styles
  body: {
    flex: 1,
  },
  chatContent: {
    flex: 1,
  },
  chatFooter: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopWidth: 2,
    borderTopColor: Theme.Colors.Gunmetal,
  },
  chatMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatMenuButton: {
    width: 36,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  chatMenuButtonIcon: {
    fontSize: 30,
    color: Theme.Colors.Independence1,
  },
  chatFieldContainer: {
    flex: 1,
    paddingHorizontal: 6,
  },
  chatInputField: {
    width: '100%',
    height: 40,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Theme.Colors.White,
    backgroundColor: Theme.Colors.Gunmetal,
    borderRadius: 40,
  },
  chatSendButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 40,
    backgroundColor: Theme.Colors.MediumSlateBlue,
  },
  chatSendButtonIcon: {
    marginLeft: 3,
    fontSize: 20,
    color: Theme.Colors.White,
  },
});

export default styles;
