public class at6 {

    public static void main(String[] args) {

        Thread nomeThread = new Thread(new Nome());
        Thread idadeThread = new Thread(new Idade());
        Thread cidadeThread = new Thread(new Cidade());

        nomeThread.start();
        idadeThread.start();
        cidadeThread.start();

        try {
            nomeThread.join();
            idadeThread.join();
            cidadeThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Processo finalizado. Até mais!");
    }
}

class Nome implements Runnable {
    @Override
    public void run() {
        System.out.println("Meu nome é: Luís Matias");
    }
}

class Idade implements Runnable {
    @Override
    public void run() {
        System.out.println("Tenho 25 anos");
    }
}

class Cidade implements Runnable {
    @Override
    public void run() {
        System.out.println("Moro em Ceilândia");
    }
}
