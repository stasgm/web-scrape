import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootState, IBank } from '@models';
import { Banks } from 'app/components';
import { fetchBanks } from 'app/redux/actions/rates';

export interface IStateProps {
  banks: IBank[];
}

export interface IDispatchProps {
  fetchData: () => void;
}

export type IProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IRootState): IStateProps => ({
  banks: state.currencyRates.banks
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  fetchData: () => dispatch<any>(fetchBanks())
});

export const BanksContainer = connect<IStateProps, IDispatchProps, {}, IRootState>(
  mapStateToProps,
  mapDispatchToProps
)(Banks);
