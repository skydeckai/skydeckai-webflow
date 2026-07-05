/**
 * Vietnamese (vi) page copy — same shape as en.ts.
 * Product names, commands and mono chips stay untranslated; Control Center is
 * rendered "Trung tâm Điều khiển" per the old vi/ site precedent.
 */
import type { SiteCopy } from "./en";

export const copy: SiteCopy = {
  home: {
    metaTitle: "SkyDeck.ai — Đội ngũ tác nhân AI luôn hoạt động mà doanh nghiệp của bạn thực sự kiểm soát được",
    metaDescription:
      "Chạy Claude Code, OpenClaw và nhiều công cụ khác trong Agent Pods bền bỉ — đồng đội cùng cộng tác trực tiếp trên cùng những terminal, mọi phiên chạy đều do SkyDeck quản trị. An toàn, ưu tiên doanh nghiệp, không lệ thuộc nhà cung cấp.",
    badge: "Nhiều tác nhân luôn hoạt động · được quản trị & cộng tác",
    h1Pre: "Đội ngũ tác nhân AI luôn hoạt động\nmà doanh nghiệp của bạn ",
    h1Italic: "thực sự kiểm soát được.",
    sub: "Chạy Claude Code, OpenClaw và nhiều công cụ khác trong các pod bền bỉ — nhiều tác nhân cùng lúc, đồng đội của bạn cộng tác trực tiếp trên cùng những terminal, mọi phiên chạy đều do SkyDeck quản trị. Đây chính là quy trình làm việc mà các kỹ sư của bạn vốn đã yêu thích, nay được chia sẻ, bảo mật và quản lý ở cấp doanh nghiệp.",
    ctaPrimary: "Tạo không gian làm việc miễn phí",
    ctaSecondary: "Tìm hiểu Agent Pods →",
    heroCaptions: [
      "3 tác nhân Claude Code & OpenClaw đang chạy",
      "3 đồng đội trực tiếp trong một terminal",
      "bản xem trước web bên trong pod",
    ],
    marqueeLabel: "Không lệ thuộc nhà cung cấp — mang theo mọi mô hình",
    pillarsEyebrow: "Ba trụ cột cho thành công",
    pillarsH2: "Bảo mật. Hợp tác. Tùy chỉnh.",
    pillars: [
      {
        num: "1",
        title: "Ưu tiên bảo mật",
        body: "Các biện pháp quản lý và bảo mật mạnh mẽ đặt bạn vào vị trí điều khiển. Mã hóa khi truyền và khi lưu trữ, SSO, DLP và RBAC — quản trị viên điều hành mọi thứ từ Trung tâm Điều khiển.",
      },
      {
        num: "2",
        title: "Xây dựng cho đội nhóm",
        body: "GenStudio trao cho mỗi thành viên một không gian làm việc để xây dựng quy trình AI, cùng các công cụ cộng tác để mời đồng nghiệp tham gia vào cuộc trò chuyện. Cùng làm việc, cùng học hỏi, cùng ra mắt sản phẩm.",
      },
      {
        num: "3",
        title: "Tùy chỉnh & Tự động hóa",
        body: "Tiếp cận mọi LLM, phân phối các prompt thông minh, công cụ và tác nhân đến những nhóm đã được phê duyệt, và tự động hóa công việc lặp đi lặp lại bằng các quy trình tự động — tất cả từ một giao diện trực quan.",
      },
    ],
    productsEyebrow: "Một nền tảng, ba bề mặt",
    productsH2: "Sáng tạo. Tuyển chọn. Kiểm soát.",
    genstudio: {
      eyebrow: "GenStudio · Sáng tạo",
      h3: "Một studio sáng tạo cho mọi đội nhóm",
      body: "Xây dựng quy trình AI tạo sinh trong giao diện trò chuyện quen thuộc. Mời đồng nghiệp vào bất kỳ cuộc trò chuyện nào, chia sẻ prompt và tác nhân, rồi lên lịch và tự động hóa công việc.",
      tags: ["Không lệ thuộc", "Trò chuyện nhóm", "Prompt & tác nhân", "Lên lịch & tự động hóa", "Slack"],
    },
    control: {
      eyebrow: "Trung tâm Điều khiển · Tuyển chọn & Kiểm soát",
      h3: "Triển khai AI an toàn trên toàn doanh nghiệp",
      body: "Tuyển chọn nhóm nào được tiếp cận mô hình, công cụ và tác nhân nào. Mã hóa khi truyền và khi lưu trữ, SSO, DLP, RBAC, và giờ đây là rào chắn chi tiêu cho các pod đang chạy.",
      tags: ["SSO", "DLP", "RBAC", "Mã hóa", "Rào chắn chi tiêu", "HuggingFace"],
    },
    pods: {
      eyebrow: "Agent Pods",
      badge: "NEW",
      h3: "Không gian làm việc bền bỉ nơi tác nhân vận hành",
      body: "Khởi chạy một pod đám mây, đưa Claude Code hoặc OpenClaw vào, và để nó làm việc suốt ngày đêm. Cùng vận hành tác nhân, triển khai chúng cho cả đội ngũ — tất cả dưới rào chắn chi tiêu của Trung tâm Điều khiển.",
      cta: "Khám phá Agent Pods →",
    },
    ctaH2: "Nhiều sức mạnh hơn. Ít rủi ro hơn.",
    ctaBody: "Tạo ngay một không gian làm việc miễn phí cho đội của bạn hôm nay — không cần thẻ tín dụng, không bị lệ thuộc.",
    ctaPrimary2: "Tạo không gian làm việc miễn phí",
    ctaSecondary2: "Liên hệ kinh doanh",
  },
  pods: {
    metaTitle: "Agent Pods — không gian làm việc đám mây bền bỉ nơi tác nhân của bạn vận hành | SkyDeck.ai",
    metaDescription:
      "Khởi chạy một pod, đưa Claude Code hoặc OpenClaw vào, và để nó làm việc suốt ngày đêm. Cùng vận hành tác nhân và triển khai cho cả đội ngũ — với rào chắn chi tiêu tích hợp sẵn.",
    badge: "AGENT PODS · GenStudio × Trung tâm Điều khiển",
    h1Pre: "Không gian làm việc đám mây bền bỉ\nnơi tác nhân của bạn ",
    h1Italic: "làm chủ cuộc chơi.",
    sub: "Khởi chạy một pod, đưa Claude Code hoặc OpenClaw vào, và để nó làm việc suốt ngày đêm. Cùng vận hành tác nhân và triển khai cho cả đội ngũ — với rào chắn chi tiêu tích hợp sẵn.",
    ctaPrimary: "Khởi chạy Pod",
    ctaSecondary: "Đọc hướng dẫn",
    launchEyebrow: "Bước một",
    launchH2: "Tạo một pod từ mẫu có sẵn",
    guideEyebrow: "Cấu tạo của một pod",
    guideH2: "Khởi chạy một lần. Nó cứ thế làm việc.",
    guide: [
      {
        icon: "🚀",
        iconBg: "#ECEBF3",
        title: "Khởi chạy chỉ với một cú nhấp",
        body: "Tạo một pod từ GenStudio và chọn tác nhân của bạn — Claude Code, OpenClaw, hoặc một image tùy chỉnh.",
      },
      {
        icon: "🖥️",
        iconBg: "#E4E6F0",
        title: "Terminal chính vẫn sống sót qua những lần ngắt kết nối",
        body: "Phiên chính của bạn vẫn tiếp tục chạy ngay cả khi bạn đóng tab hay gập laptop. Các tab bổ sung có khoảng 45 giây ân hạn trước khi được giải phóng.",
      },
      {
        icon: "🌐",
        iconBg: "#E7E5EE",
        title: "Khung trình duyệt tích hợp",
        body: "Xem trước ứng dụng web và để tác nhân điều khiển một trình duyệt thật trên các cổng mở của pod, ngay bên cạnh terminal.",
      },
      {
        icon: "💤",
        iconBg: "#ECEBF3",
        title: "Ngủ & khôi phục",
        body: "Pod nhàn rỗi tự động ngủ để tiết kiệm chi tiêu và khôi phục đúng nơi đã dừng lại — không mất trạng thái.",
      },
      {
        icon: "💾",
        iconBg: "#E4E6F0",
        title: "Những gì được lưu giữ",
        body: "Mọi thứ trong /workspace đều được lưu giữ qua các phiên — cùng với ~/.claude trong pod Claude Code, nên thông tin đăng nhập và lịch sử được giữ lại.",
      },
      {
        icon: "🔗",
        iconBg: "#E7E5EE",
        title: "Chia sẻ & chia đều chi phí",
        body: "Mời đồng đội vào một pod và xem chính xác mỗi phiên chạy tốn bao nhiêu, được phân bổ theo từng thành viên và từng nhóm.",
      },
    ],
    useCasesEyebrow: "Các đội nhóm làm gì với Pods",
    useCasesH2: "Ba cách để giao việc cho tác nhân",
    useCases: [
      {
        anchor: "run-around-the-clock",
        tab: "Chạy suốt ngày đêm",
        icon: "🌙",
        title: "Chạy tác nhân AI suốt ngày đêm",
        body: "Khởi động một phiên Claude Code chạy dài hơi hoặc một gateway OpenClaw tách rời và để nó làm việc trong khi bạn ngủ — chế độ tự động ngủ và ngân sách giúp mọi thứ tiết kiệm.",
        points: [
          { h: "Phiên tách rời", d: "Claude Code chạy trong terminal chính, tồn tại lâu hơn kết nối của bạn." },
          { h: "Gateway OpenClaw", d: "Chạy openclaw như một dịch vụ gateway tách rời để các công cụ khác có thể gọi tới." },
          { h: "Tự động ngủ × ngân sách", d: "Pod nhàn rỗi tự động ngủ; chi tiêu không bao giờ vượt quá hạn mức của bạn." },
          { h: "Khôi phục bất cứ lúc nào", d: "Đánh thức pod và tiếp tục đúng nơi tác nhân đã dừng lại." },
        ],
      },
      {
        anchor: "operate-together",
        tab: "Cùng vận hành",
        icon: "🤝",
        title: "Cùng vận hành một tác nhân",
        body: "Mỗi lần chỉ một người điều khiển giữ bàn phím trong khi phần còn lại của đội quan sát trực tiếp. Chuyển giao quyền điều khiển vòng quanh thế giới để vận hành nối ca toàn cầu đúng nghĩa.",
        points: [
          { h: "Mỗi lần một người điều khiển", d: "Đúng một người điều khiển tác nhân — không xung đột." },
          { h: "Yêu cầu / trao quyền", d: "Trao vô-lăng chỉ với một cú nhấp khi đến lượt người khác." },
          { h: "Người quan sát chỉ đọc", d: "Đồng đội theo dõi từng phím gõ mà không can thiệp." },
          { h: "Nối ca toàn cầu", d: "Chuyển giao qua các múi giờ để giữ tác nhân hoạt động 24/7." },
        ],
      },
      {
        anchor: "deploy-to-your-team",
        tab: "Triển khai cho đội của bạn",
        icon: "🚀",
        title: "Triển khai tác nhân cho toàn đội ngũ",
        body: "Triển khai một pod hệ thống cho mọi người, phát hành các pod tùy chỉnh cho những nhóm cụ thể, và giữ toàn bộ đội pod dưới rào chắn chi tiêu và sự giám sát trực tiếp.",
        points: [
          { h: "Triển khai pod hệ thống", d: "Cung cấp một pod tiêu chuẩn, sẵn sàng chạy cho mọi thành viên." },
          { h: "Pod tùy chỉnh", d: "Xây dựng các image riêng và phát hành cho những nhóm cần đến." },
          { h: "Phân quyền theo nhóm", d: "Xác định nhóm nào được khởi chạy pod và tác nhân nào." },
          { h: "Giám sát toàn đội", d: "Xem mọi pod đang chạy và thực thi rào chắn từ một màn hình." },
        ],
      },
    ],
    spendEyebrow: "Trung tâm Điều khiển · Pods",
    spendH2: "Giám sát mà không cần trông chừng",
    spendBody:
      "Đặt ngân sách hàng tháng và để SkyDeck thực thi. Giới hạn chi tiêu theo từng thành viên và từng nhóm, giới hạn số phiên đồng thời, và tự động cho pod nhàn rỗi ngủ — trong khi bạn theo dõi mọi tác nhân đang chạy từ một màn hình.",
    spend: [
      { icon: "💰", title: "Ngân sách hàng tháng", body: "Đặt một hạn mức cho toàn không gian làm việc và chọn chặn, cảnh báo, hoặc cho phép vượt mức khi chạm ngưỡng." },
      { icon: "👤", title: "Hạn mức theo thành viên", body: "Cho mỗi người một trần chi tiêu để không pod nào có thể ngốn hết ngân sách." },
      { icon: "👥", title: "Hạn mức theo nhóm", body: "Phân bổ ngân sách theo đội hoặc nhóm và theo dõi mức tiêu so với từng phần phân bổ." },
      { icon: "⚡", title: "Giới hạn đồng thời", body: "Giới hạn số pod có thể chạy cùng lúc để giữ tải và chi phí trong tầm dự đoán." },
      { icon: "💤", title: "Tự động ngủ khi nhàn rỗi", body: "Tự động cho pod ngủ sau một khoảng không hoạt động, rồi khôi phục khi cần." },
      { icon: "👁️", title: "Giám sát pod đang chạy", body: "Xem trực tiếp mọi pod đang hoạt động, người điều khiển, tác nhân và mức chi tiêu hiện tại." },
    ],
    overseeTitle: "Giám sát pod đang chạy",
    overseeSub: "Xem trực tiếp trên mọi đội nhóm",
    overseeCols: ["Pod", "Tác nhân", "Người điều khiển", "Trạng thái", "Phiên"],
    statusWords: { running: "đang chạy", building: "đang dựng", sleeping: "đang ngủ", stopped: "đã dừng" },
    ctaH2: "Giao việc cho một tác nhân ngay tối nay.",
    ctaBody: "Khởi chạy pod đầu tiên của bạn trong một không gian làm việc miễn phí. Được Trung tâm Điều khiển quản trị ngay từ lần chạy đầu tiên.",
    ctaPrimary2: "Khởi chạy Pod",
    ctaSecondary2: "← Quay lại nền tảng",
  },
};

export default copy;
