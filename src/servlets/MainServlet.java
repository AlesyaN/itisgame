package servlets;

import freemarker.template.Template;
import freemarker.template.TemplateException;
import servlets.helper.Helper;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

public class MainServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        Template t = Helper
                .getConfig(request.getServletContext())
                .getTemplate("index.ftl");
        HashMap<String, Object> root = new HashMap<>();
        t.setOutputEncoding("UTF-8");
        response.setContentType("text/html;charset=utf-8");
        try {
            t.process(root, response.getWriter());
        } catch (TemplateException e) {
            e.printStackTrace();
        }
    }
}
