import { useDispatch } from 'react-redux';
import { logout } from '../slices/auth';

const Perfil = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Perfil</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Perfil;
