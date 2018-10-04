package servlets;

import java.io.IOException;
import java.io.PrintWriter;

public class GamesServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter pw = response.getWriter();
        pw.println("<a href='/crocodile'>Crocodile</a>");
        pw.println("<a href='/mafia'>Mafia</a>");
        pw.println("<a href='/predictions'>Predictions</a>");
    }
}
