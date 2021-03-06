package servlets;

import freemarker.template.Template;
import freemarker.template.TemplateException;
import servlets.helper.Helper;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;

public class AboutServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Template t = Helper
                .getConfig(request.getServletContext())
                .getTemplate("about.ftl");
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
