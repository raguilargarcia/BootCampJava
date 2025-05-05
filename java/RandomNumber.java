import java.util.Scanner;
import java.util.Random;

public class RandomNumber {
    public static void main(String[] args) {
        Random random = new Random();
        int randomNumber = random.nextInt(100) + 1;
        Scanner scanner = new Scanner(System.in);
        int userGuess = 0;

        System.out.println("Adivina el número (entre 1 y 100):");

        while (userGuess != randomNumber) {
            System.out.print("Ingresa tu número: ");
            userGuess = scanner.nextInt();

            if (userGuess < randomNumber) {
                System.out.println("El número es mayor.");
            } else if (userGuess > randomNumber) {
                System.out.println("El número es menor.");
            } else {
                System.out.println("¡Felicidades! Adivinaste el número.");
            }
        }

        scanner.close();
    }
}
