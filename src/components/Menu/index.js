import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Icon from 'react-icons-kit';
import { thList } from 'react-icons-kit/fa/thList';
import { hashtag } from 'react-icons-kit/fa/hashtag';
import './styles.scss';

function Menu(props) {
  const { isMenuOpen } = props;
  return (
    <nav
      className={classnames(
        'main-menu',
        isMenuOpen ? 'open' : ''
      )}
    >
      <ul>
        <li className="title">
          <Icon size={27} icon={thList} />
          <span>Меню</span>
        </li>
        <li className="item">
          Главная страница
        </li>
        <li className="item">
          Мультсериалы
        </li>
        <li className="title">
          <Icon size={27} icon={hashtag} />
          <span>Теги</span>
        </li>
        <li className="item">#FOX</li>
        <li className="item">#COMEDY CENTRAL</li>
        <li className="item">#CARTOON NETWORK</li>
        <li className="item">#NETFLIX</li>
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired
};

const mapStateToProps = ({ system: { isMenuOpen } }) => ({ isMenuOpen });

export default connect(mapStateToProps)(Menu);
