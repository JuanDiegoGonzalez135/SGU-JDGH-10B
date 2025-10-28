package utez.edu.mx.server.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import utez.edu.mx.server.Models.Users.UserRepository;
import utez.edu.mx.server.Models.Users.Usuario;
import utez.edu.mx.server.Utils.APIResponse;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public APIResponse FindAll(){
        List <Usuario> lista = userRepository.findAll();
        return new APIResponse(lista,false, "peticion exitosa :D" , HttpStatus.OK);
    }

    public APIResponse Create(Usuario client){
       try {
           userRepository.save(client);
           return new APIResponse(false, "Usuario guardado con exito", HttpStatus.OK);
       }catch (Exception ex){
           ex.printStackTrace();
           return new APIResponse(true, "Error al registrar el usuario", HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

    public APIResponse Update(Long id, Usuario actua){
        try {
            Optional<Usuario> found = userRepository.findById(id);
            if (found.isEmpty()){
                return new APIResponse(true, "No se encontro el usuario", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            Usuario usuario = found.get();
            usuario.setNombre(actua.getNombre());
            usuario.setApellido(actua.getApellido());
            usuario.setCorreo(actua.getCorreo());
            usuario.setTelefono(actua.getTelefono());
            userRepository.save(usuario);
            return new APIResponse(false, "Usuario guardado con exito", HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
            return new APIResponse(true, "Error al registrar el usuario", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    public APIResponse Eliminar(Long id){
        try {
            if (id == null){
                return new APIResponse(true, "No se encontro el usuario", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            userRepository.deleteById(id);
            return new APIResponse(false, "Operqacion exitosa", HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
            return new APIResponse(true, "Error al eliminar al usuario", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
