public class Start {
    public static void main(String[] args) {
        int numbers = 1234567;      
        int sum = 0;
        
        for (String number : String.valueOf(numbers).split("")) {
            sum += Integer.parseInt(number);
        }
        
        System.out.println("Sum is: " + sum);
    }
}