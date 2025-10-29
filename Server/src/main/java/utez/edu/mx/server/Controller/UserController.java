package utez.edu.mx.server.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utez.edu.mx.server.Modules.Users.Usuario;
import utez.edu.mx.server.Service.UserService;
import utez.edu.mx.server.Utils.APIResponse;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/usuarios/")
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping()
    public ResponseEntity <APIResponse>findAll(){
        APIResponse response = userService.FindAll();
        return new ResponseEntity<>(response, response.getStatus());
    }

    @GetMapping("{id}")
    public ResponseEntity <APIResponse>findbyid(@PathVariable Long id){
        APIResponse response = userService.FindById(id);
        return new ResponseEntity<>(response, response.getStatus());
    }


    @PostMapping()
    public ResponseEntity <APIResponse>create(@RequestBody Usuario usuario){
        APIResponse respuesta = userService.Create(usuario);
        return new ResponseEntity<>(respuesta, respuesta.getStatus());
    }


    @PutMapping("{id}")
    public ResponseEntity <APIResponse>update(@PathVariable Long id, @RequestBody Usuario act){
        APIResponse respuesta = userService.Update(id, act);
        return new ResponseEntity<>(respuesta, respuesta.getStatus());
    }

    @DeleteMapping( "{id}")
    public ResponseEntity <APIResponse>delete(@PathVariable Long id){
        APIResponse respuesta = userService.Eliminar(id);
        return new ResponseEntity<>(respuesta, respuesta.getStatus());
    }
}
