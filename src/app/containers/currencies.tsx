import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState, ICurrency } from '@models';
import { Currencies } from 'app/components';
import { fetchCurrencies } from 'app/redux/actions/rates';

export interface IStateProps {
  currencies: ICurrency[];
}

export interface IDispatchProps {
  fetchData: () => void;
}

export type IProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IRootState): IStateProps => ({
  // currencies: state.profile.options.currencies
  currencies: state.currencyRates.currencies
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  fetchData: () => dispatch<any>(fetchCurrencies())
});

export const CurrenciesContainer = connect<IStateProps, IDispatchProps, {}, IRootState>(
  mapStateToProps,
  mapDispatchToProps
)(Currencies);
