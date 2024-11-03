import Email from "@/components/post/Email";
import Number from "@/components/post/Number";
import Password from "@/components/post/Password";
import Photo from "@/components/post/Photo";
import Text from "@/components/post/Text";
import Textarea from "@/components/post/Textarea";

const IndexPage: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white">
                <h1 className="p-2 border-b">
                    Images
                </h1>
                <div className="p-2">
                    <Photo title="Your Cover (1200x250px)" img="/user/1.jpg" />
                    <Photo title="Your photo (600x600px)" img="/user/1.jpg" />
                </div>
            </div>
            <div className="bg-white">
                <h1 className="p-2 border-b">
                    Company
                </h1>
                <div className="p-2">
                    <Text title="Company name" sub="Enter your full name" />
                    <Number title="Company number" sub="Enter your number" />
                    <Email title="Company email" sub="Enter your email" />
                </div>
            </div>
            <div className="bg-white">
                <h1 className="p-2 border-b">
                    Location
                </h1>
                <div className="p-2">
                    <Text title="Country" sub="Enter your country name" />
                    <Text title="City" sub="Enter your city name" />
                    <Number title="Postal code" sub="Enter postal code number" />
                    <Text title="Street" sub="Enter your street name" />
                    <Textarea title="Address" sub="Enter your street name" />
                </div>
            </div>
            <div className="bg-white">
                <h1 className="p-2 border-b">
                    Social media
                </h1>
                <div className="p-2">
                    <Text title="Facebook" sub="Enter facebook id" />
                    <Text title="X (twitter)" sub="Enter X (twitter) id" />
                    <Text title="Gmail" sub="Enter gmail id" />
                    <Number title="WhatsApp" sub="Enter whatsApp number" />
                    <Text title="Skype" sub="Enter skype id" />
                    <Text title="LinkedIn" sub="Enter linkedIn id" />
                </div>
            </div>
            <div className="bg-white">
                <h1 className="p-2 border-b">
                    Shop Opening hours
                </h1>
                <div className="p-2">
                    <Text title="Monday" sub="07:00 - 12:00" />
                    <Text title="Tuesday" sub="07:00 - 12:00" />
                    <Text title="Wednesday" sub="07:00 - 12:00" />
                    <Text title="Thursday" sub="07:00 - 12:00" />
                    <Text title="Friday" sub="closed" />
                    <Text title="Saturday" sub="07:00 - 12:00" />
                    <Text title="Sunday" sub="07:00 - 12:00" />
                </div>
            </div>
            <div className="bg-white">
                <h1 className="p-2 border-b">
                    Change your password
                </h1>
                <div className="p-2">
                    <Password title="New Password" sub="Enter your password" />
                    <Password title="Confirm Password" sub="Enter your password" />
                </div>
            </div>            
        </div>
    );
  };
  
  export default IndexPage;