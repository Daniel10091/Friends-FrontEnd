import { StyleSheet } from 'react-native';
import { Theme } from '../../../constants';

const HeaderStyles = Theme.Sizes.Header;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Theme.Colors.RaisinBlack,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.RaisinBlack,
  },

  // Header styles
  header: {
    flexDirection: 'column',
    paddingHorizontal: HeaderStyles.paddingHorizontal,
    paddingVertical: HeaderStyles.paddingVertical,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 18,
  },
  title: {
    fontSize: HeaderStyles.Title.fontSize,
    fontWeight: 'bold',
    color: Theme.Colors.White,
  },
  contactsQuantity: {
    marginLeft: 6,
    marginBottom: 6,
    fontSize: HeaderStyles.Title.ContactsQuantity.fontSize,
    fontWeight: 'bold',
    color: Theme.Colors.White,
  },
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingLeft: HeaderStyles.paddingHorizontal,
    paddingRight: 4,
    paddingVertical: 10,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 30,
    color: Theme.Colors.White,
  },
  searchField: {
    flex: 1,
    height: 50,
    marginLeft: 10,
    fontSize: 18,
    color: Theme.Colors.CadetBlueCrayola,
    borderRadius: 10,
    // borderWidth: 1,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  addContactButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // borderWidth: 1,
  },
  addContactIcon: {
    fontSize: 40,
    color: Theme.Colors.MediumSlateBlue,
  },

  // Body styles
  body: {
    flex: 1,
  },
  listContainer: {
    flexDirection: 'column',
    paddingBottom: 20,
  },
  item: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  contactAvatarContainer: {

  },
  contactAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  itemStatusIcon: {
    position: 'absolute',
    top: 0,
    right: 4,
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: Theme.Colors.RaisinBlack,
    borderRadius: 10,
  },
  itemOnlineIcon: {
    backgroundColor: Theme.Colors.Melachite,
  },
  itemOfflineIcon: {
    backgroundColor: Theme.Colors.CadetBlueCrayola,
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginLeft: 20,
  },
  itemColumn: {
    flexDirection: 'column',
  },
  columnStart: {
    flex: 1,
    alignItems: 'flex-start',
  },
  columnEnd: {
    alignItems: 'flex-end',
  },
  contactName: {
    fontSize: 20,
    color: Theme.Colors.CadetBlueCrayola,
  },
  contactMessage: {
    marginTop: 6,
    fontSize: 14,
    color: Theme.Colors.Independence2,
  },
  contactDate: {
    fontSize: 13,
    color: Theme.Colors.Independence2,
  },
  itemNoticationIcon: {
    width: 10,
    height: 10,
    marginTop: 14,
    borderWidth: 1,
    borderColor: Theme.Colors.RaisinBlack,
    borderRadius: 10,
    backgroundColor: Theme.Colors.FieryRose,
  },
});

export default styles;
