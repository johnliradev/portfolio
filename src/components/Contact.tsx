import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Download,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <Card
      id="contact"
      className="w-full max-w-4xl dark:shadow-[0_4px_6px_-1px_rgba(255,255,255,0.30)]   shadow-[0_4px_6px_-1px_rgba(0,0,0,0.75)]  "
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row md:justify-around ">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e1e1e]">
                <Mail className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-base">johnalsoares@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e1e1e]">
                <Phone className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-base">+55 84 991898953</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e1e1e]">
                <MapPin className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-base">Natal, RN - Brazil</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 md:w-64">
            <p className="text-gray-400 mb-1">Connect with me</p>
            <a
              target="_blank"
              className="w-full"
              href="https://www.linkedin.com/in/john-lira-60a9b627b/"
            >
              <Button
                variant="outline"
                className="w-full cursor-pointer"
                aria-label="LinkedIn"
              >
                LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
            <a
              target="_blank"
              className="w-full"
              href="https://github.com/johnliradev/"
            >
              <Button
                variant="outline"
                className="w-full cursor-pointer"
                aria-label="GitHub"
              >
                GitHub
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
            <div className="text-center">
              <Button
                variant="default"
                className="cursor-pointer w-full h-12 justify-between bg-black hover:bg-black/80 text-white mt-2"
                aria-label="Download CV"
              >
                <span>Download my CV</span>
                <Download className="w-4 h-4" />
              </Button>
              <p className="text-[11px] font-bold">NOT DONE YET</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default Contact;
